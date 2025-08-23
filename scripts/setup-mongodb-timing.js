#!/usr/bin/env node

const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/node_ukraine_db';

// Define User schema with text index for text search
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// Create text index on password field for text search timing attacks
userSchema.index({ password: 'text' });

const User = mongoose.model('User', userSchema);

const setupMongoDBTiming = async () => {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    console.log('🧹 Clearing existing users...');
    await User.deleteMany({});
    console.log('✅ Cleared existing users');

    // Create test users with different password patterns
    const testUsers = [
      { name: 'Alice', email: 'alice@test.com', password: 'secret123' },
      { name: 'Bob', email: 'bob@test.com', password: 'secret456' },
      { name: 'Charlie', email: 'charlie@test.com', password: 'secret789' },
      { name: 'David', email: 'david@test.com', password: 'admin123' },
      { name: 'Eve', email: 'eve@test.com', password: 'admin456' },
      { name: 'Frank', email: 'frank@test.com', password: 'password123' },
      { name: 'Grace', email: 'grace@test.com', password: 'password456' },
      { name: 'Henry', email: 'henry@test.com', password: 'user123' },
      { name: 'Ivy', email: 'ivy@test.com', password: 'user456' },
      { name: 'Jack', email: 'jack@test.com', password: 'test123' },
      // Add more users with different patterns to make timing differences more noticeable
      { name: 'Kate', email: 'kate@test.com', password: 'supercalifragilisticexpialidocious' },
      { name: 'Liam', email: 'liam@test.com', password: 'abcdefghijklmnopqrstuvwxyz' },
      { name: 'Mia', email: 'mia@test.com', password: '123456789012345678901234567890' },
      { name: 'Noah', email: 'noah@test.com', password: 'qwertyuiopasdfghjklzxcvbnm' },
      { name: 'Olivia', email: 'olivia@test.com', password: 'passwordpasswordpassword' }
    ];

    console.log('📝 Inserting test users...');
    const insertedUsers = await User.insertMany(testUsers);
    console.log(`✅ Inserted ${insertedUsers.length} test users`);

    // Create text index
    console.log('🔍 Creating text index...');
    await User.collection.createIndex({ password: 'text' });
    console.log('✅ Text index created');

    // Show some sample data
    console.log('\n📊 Sample users created:');
    const sampleUsers = await User.find({}).limit(5);
    sampleUsers.forEach(user => {
      console.log(`   - ${user.name}: ${user.email} (password: ${user.password})`);
    });

    console.log('\n🎯 Target passwords for timing attack:');
    console.log('   - "secret123" (should be fastest)');
    console.log('   - "secret456" (should be medium)');
    console.log('   - "secret789" (should be medium)');
    console.log('   - "admin123" (should be medium)');
    console.log('   - "password123" (should be slower)');
    console.log('   - "supercalifragilisticexpialidocious" (should be slowest)');

    console.log('\n🚀 MongoDB timing attack setup complete!');
    console.log('   You can now test the timing attack with different password patterns.');

  } catch (error) {
    console.error('❌ Error setting up MongoDB timing attack:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
};

// Run if called directly
if (require.main === module) {
  setupMongoDBTiming().catch(console.error);
}

module.exports = { setupMongoDBTiming };
