import * as mongoose from 'mongoose';

const deptSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Department = mongoose.model('Department', deptSchema);

export default Department;
