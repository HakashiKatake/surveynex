import * as XLSX from 'xlsx';
import { RegistrationFormData } from './validation';
import { promises as fs } from 'fs';
import path from 'path';

export interface ExcelUser extends RegistrationFormData {
  registrationDate: string;
}

export class ExcelManager {
  private filePath: string;

  constructor() {
    // Create exports directory if it doesn't exist
    const exportsDir = path.join(process.cwd(), 'exports');
    this.filePath = path.join(exportsDir, 'registrations.xlsx');
    this.ensureDirectoryExists(exportsDir);
  }

  private async ensureDirectoryExists(dir: string): Promise<void> {
    try {
      await fs.access(dir);
    } catch {
      await fs.mkdir(dir, { recursive: true });
    }
  }

  async addUser(userData: RegistrationFormData): Promise<void> {
    try {
      const excelUser: ExcelUser = {
        ...userData,
        registrationDate: new Date().toISOString(),
      };

      let workbook: XLSX.WorkBook;
      let worksheet: XLSX.WorkSheet;

      try {
        // Try to read existing file
        const buffer = await fs.readFile(this.filePath);
        workbook = XLSX.read(buffer, { type: 'buffer' });
        worksheet = workbook.Sheets['Registrations'];
      } catch {
        // File doesn't exist, create new workbook
        workbook = XLSX.utils.book_new();
        worksheet = XLSX.utils.json_to_sheet([]);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Registrations');
      }

      // Convert worksheet to JSON, add new user, and convert back
      const existingData = XLSX.utils.sheet_to_json(worksheet);
      const updatedData = [...existingData, excelUser];

      // Create new worksheet with updated data
      const newWorksheet = XLSX.utils.json_to_sheet(updatedData);
      
      // Set column widths for better readability
      const columnWidths = [
        { wch: 25 }, // Full Name
        { wch: 8 },  // Age
        { wch: 30 }, // Email
        { wch: 20 }, // Country
        { wch: 20 }, // State
        { wch: 20 }, // County
        { wch: 20 }, // Industry
        { wch: 20 }, // Registration Date
      ];
      newWorksheet['!cols'] = columnWidths;

      // Replace the worksheet in the workbook
      workbook.Sheets['Registrations'] = newWorksheet;

      // Write the file
      const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
      await fs.writeFile(this.filePath, buffer);

      console.log('User data successfully added to Excel file');
    } catch (error) {
      console.error('Error adding user to Excel file:', error);
      throw new Error('Failed to save user data to Excel file');
    }
  }

  async getAllUsers(): Promise<ExcelUser[]> {
    try {
      const buffer = await fs.readFile(this.filePath);
      const workbook = XLSX.read(buffer, { type: 'buffer' });
      const worksheet = workbook.Sheets['Registrations'];
      return XLSX.utils.sheet_to_json(worksheet) as ExcelUser[];
    } catch {
      return [];
    }
  }

  getFilePath(): string {
    return this.filePath;
  }
}
