# MongoDB Express Starter

A basic Express.js application with MongoDB connection using Mongoose.

## Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)
- npm/yarn

## Installation
1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Create `.env` file:
```env
MONGO_URI=mongodb://localhost:27017/db-test
```

## API Documentation

### User Model
```javascript
{
  name: String,
  email: String
}
```

### Sample Routes (to be implemented)
- `POST /users` - Create new user
- `GET /users` - Get all users
- `GET /users/:id` - Get single user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

## Code Examples

### Database Connection
```javascript
// app.js
mongoose.connect(process.env.MONGO_URI);
```

### Creating a User
```javascript
// app.js
await User.create({
  name: "Abdul Rehman",
  email: "abdulrehmankhanzada@gmail.com"
});
```

### User Model Definition
```javascript
// models/userModel.js
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});
```

## Running the Server
```bash
node app.js
```

## Contribution Guidelines
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License
MIT
