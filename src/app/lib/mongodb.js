import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

let clientPromise;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongooseClientPromise) {
    global._mongooseClientPromise = mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  clientPromise = global._mongooseClientPromise;
} else {
  clientPromise = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default clientPromise;
