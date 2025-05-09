import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StaffService } from '../../services/staff/staff.service';
import { CreateStaffDto } from '../../dto/create-staff.dto';
import { UpdateStaffDto } from '../../dto/update-staff.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('staff')
export class StaffController {
  
  constructor(private readonly staffService: StaffService) {}

  @ApiOperation({description: 'Create a new staff record', summary: 'Create a new staff record'})
  @Post()
  @ApiOperation({description: 'Add a new staff record', summary: 'Add a new staff record'})
  create(@Body() createStaffDto: CreateStaffDto) {
    return this.staffService.create(createStaffDto);
  }

  @ApiOperation({description: 'Get all staff records', summary: 'Get all staff records'})
  @Get()
  findAll() {
    return this.staffService.findAll();
  }

  @ApiOperation({description: 'Get a staff record by ID', summary: 'Get a staff record by ID'})
  @Get(':staffId')
  findOne(@Param('staffId') staffId: string) {
    return this.staffService.findOne(staffId);
  }

  @ApiOperation({description: 'Update a staff record by ID', summary: 'Update a staff record by ID'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStaffDto: UpdateStaffDto) {
    return this.staffService.update(id, updateStaffDto);
  }

  @ApiOperation({description: 'Delete a staff record by ID', summary: 'Delete a staff record by ID'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffService.remove(+id);
  }
}
