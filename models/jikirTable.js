const mongoose = require('mongoose');

const jikirSchema = mongoose.Schema({
  userName : {
    type: String,
    require : true,
    unique : true
  },
  jikir :[{
    name : {
      type: String,
      required : true
    },
    totalCount :{
      type: Number,
      default: 0,
    },
    monthlyCount :{
      type: Number,
      default: 0 
    },
    weeklyCount :{
      type: Number,
      default: 0 
    },
    dailyCount :{
      type: Number,
      default: 0 
    }
  }],
  date :{
    type: Date,
    default: Date.now()
  }
}) 

jikirSchema.pre('save', function (next) {
  if (this.isNew && this.jikir.length === 0) {
    this.jikir.push({ name: 'Subhan Allah' });
    this.jikir.push({ name: 'Alhamdulillah' });
    this.jikir.push({ name: 'Allahu Akbar' });
  }
  next();
}); 

jikirSchema.pre('save', function (next) {
  const currentDate = new Date();
  const lastUpdateDate = new Date(this.date);

  // Reset daily counts if it's a new day
  if (currentDate.getDate() !== lastUpdateDate.getDate()) {
    this.jikir.forEach(item => {
      item.dailyCount = 0;
    });
  }

  // Reset weekly counts if it's a new week
  if (currentDate.getDay() === 0 && lastUpdateDate < currentDate) {
    this.jikir.forEach(item => {
      item.weeklyCount = 0;
    });
  }

  // Reset monthly counts if it's a new month
  if (currentDate.getMonth() !== lastUpdateDate.getMonth()) {
    this.jikir.forEach(item => {
      item.monthlyCount = 0;
    });
  }

  // Update the document's date to the current date
  this.date = currentDate;

  next(); 
});

module.exports = mongoose.model("jikirTables",jikirSchema);