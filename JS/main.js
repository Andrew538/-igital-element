let inputs = document.querySelectorAll('input[data-rule]');

for(let input of inputs) {
    input.addEventListener('blur', function(){
        let rule = this.dataset.rule;
        let value =this.value;
        let check;

        switch(rule) {
            case 'number':
               check = /^\d+$/.test(value);
            break;
            case 'text': 
                check = /^([A-Z][a-z\-\']{1,50})|([А-ЯЁIЇҐЄ][а-яёіїґє\-\']{1,50})$/.test(value);
            break;
            case 'pass':
                check = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(value);
                
        
        }
        this.classList.remove('invalid');
        this.classList.remove('valid');
        if (check) {
            this.classList.add('valid');
        } else {
            this.classList.add('invalid');
        } 
       
        
    });
}

