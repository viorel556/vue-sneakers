<script> 

// OPTIONS API: 
export default { 
    data() { // STANDARD THING TO STORE THE STATE DATA: 
        return { 
            count: 0 
        }
    }, 

    methods: { // SOME KIND OF CONTROLLER 
        increment () { 
            this.count++; // WE access the count FROM THE CONTEXT
        }
    }
}

</script> 


<script setup>
// COMPOSITION API: 

import { ref } from 'vue'; // mandatory import 

let name = ref('Viorel');

function changeName(newName) {
    name.value = newName
}
</script>