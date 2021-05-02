function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity='go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(param1='*') {
    return function(param2='special') {
        return `You are ${param1}${param2}${param1}!`
    }
}
