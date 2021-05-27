const app = new Vue ({
    el: '#app',
    data: {
        email1:'',
        email2:'',
        email3:'',
        email4:'',
        email5:'',
        email6:'',
        email7:'',
        email8:'',
        email9:'',
        email10:'',

    },
    methods: {},
    mounted() {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.email1 = response.data.response;
        })

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.email2 = response.data.response;
        })
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.email3 = response.data.response;
        })
        
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.email4 = response.data.response;
        })
        
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.email5 = response.data.response;
        })

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.email6 = response.data.response;
        })

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.email7 = response.data.response;
        })

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.email8 = response.data.response;
        })

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.email9 = response.data.response;
        })

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.email10 = response.data.response;
        })
    }
})