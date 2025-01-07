import { Schema, model } from 'mongoose';

const reactionSchema = new Schema({
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  toJSON: {
    getters: true
  },
  id: false
});

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
}, {
  toJSON: {
    virtuals: true,
  },
  id: false
});

// Create a virtual property `reactionCount` that gets the number of reactions
thoughtSchema.virtual('reactionCount').get(function() {
  return (this.reactions as unknown as Array<typeof reactionSchema>).length;
});

const Thought = model('Thought', thoughtSchema);

export default Thought;