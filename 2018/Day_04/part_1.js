const input = require('./input');

input.sort();

function diff_in_minutes(fell_asleep, woke_up){
  const diffMs = woke_up - fell_asleep;
  return Math.round(((diffMs % 86400000) % 3600000) / 60000);
}

class Guard {
  constructor(id) {
    this.ID = id;
    this.total_slept_minutes = 0;
    this.slept_minutes = {};
  }
  sleep(fell_asleep, slept_for_minutes){
    this.total_slept_minutes += slept_for_minutes;
    let current_minute = fell_asleep.getMinutes();
    for (let i = 0; i < slept_for_minutes; i++){
      if (!this.slept_minutes[(current_minute + i) % 60])
        this.slept_minutes[(current_minute + i) % 60] = 1;
      else
        this.slept_minutes[(current_minute + i) % 60]++;
    }
  }
  get minute_most_slept(){
    let highest_minute = 0;
    Object.keys(this.slept_minutes).forEach((key)=>{
      if (this.slept_minutes[key] > (this.slept_minutes[highest_minute] || 0))
        highest_minute = key;
    });
    return +highest_minute;
  }
}

guards = {}
let last_id = 0;
let fell_asleep
for(i = 0; i < input.length; i++){
  let [, year, month, day, hour, minute, id, state] = input[i].match(/\[(\d+)-(\d+)-(\d+) (\d+):(\d+)\](?: Guard #(\d+)?)? (\w+ \w+)/);
  if (typeof id !== 'undefined'){
    if (!guards[id])
      guards[id] = new Guard(id);
    last_id = id;
  }
  if (state === 'falls asleep'){
    fell_asleep = new Date(year, month, day, hour, minute);
  }
  else if(state === 'wakes up'){
    let woke_up = new Date(year, month, day, hour, minute);
    slept_for_minutes = diff_in_minutes(fell_asleep, woke_up);
    guards[last_id].sleep(fell_asleep, slept_for_minutes);
  }
}

let answer = {total_slept_minutes:0};
Object.keys(guards).forEach((g_id)=>{
  if (guards[g_id].total_slept_minutes > answer.total_slept_minutes)
   answer = {id:+g_id, total_slept_minutes: guards[g_id].total_slept_minutes, minute_most_slept: guards[g_id].minute_most_slept};
});
console.log('Guard Info:\n' + JSON.stringify(answer,null,2));
console.log('\nDay 4 Part 1\nAnswer:', answer.id * answer.minute_most_slept);
