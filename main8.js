Vue.component('task-list', {

template: `
    
<div>
    <task v-for="task in tasks">{{ task.task }}</task>
</div>
`,


data() {
    return {
        tasks: [
            { task: 'eat great food', complete: true },
            { task: 'survive the apocalypse', complete: true },
            { task: 'go to the movies', complete: false },
        ]
    };
}

});

Vue.component('task', {
template: '<li><slot></slot></li>',

});



new Vue({
el: '#root'
});