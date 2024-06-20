//connect MongoDB
const mongoose = require('mongoose');

// const dotenv = require('dotenv');
require('dotenv').config();
console.log(process.env.PORT);
// 将环境变量中的 DATABASE_URL 存储在 mongoString 变量中
// const mongoString =
//   process.env.MONGODB_CONNECT_URL.replace(
//     '<password>',
//     process.env.MONGODB_CONNECT_PASSWORD
//   ) || 'mongodb://localhost:27017';
const mongoString =
  process.env.MONGODB_CONNECT_URL.replace(
    '<password>',
    process.env.MONGODB_CONNECT_PASSWORD
  ) || 'mongodb://localhost:27017';
console.log(mongoString);
// const mongoString =
//   process.env.MONGODB_CONNECT_URL || 'mongodb://localhost:27017';
// console.log(mongoString);
console.log('MONGODB_CONNECT_URL:', process.env.MONGODB_CONNECT_URL); // 添加这行代码来检查环境变量

//backend port 使用 mongoose.connect() 连接到 MongoDB 数据库
const connectDB = async () => {
  try {
    await mongoose.connect(mongoString);
    console.log('Backend connectDB successfully');
  } catch (error) {
    console.log('Connect failed ' + error.message);
  }
};

module.exports = connectDB;
