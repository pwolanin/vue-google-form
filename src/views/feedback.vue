<template>
<div class="feedback">
  <h1>{{ msg }}</h1>
  <form v-if="!submitted">
    <div class="form-item">
      <label for="your-name">Your Name</label>
      <input type='text' id='your-name' name='your-name' v-model="name" />
    </div>
    <div class="form-item">
  <label for="comment">Your Comment</label>
  <textarea id="comment" name="comment" v-model="comment" />
  </div>
  <button type="submit" @click.prevent="submitForm">Submit</button>
  </form>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Feedback',
  data () {
    return {
      name: '',
      comment: '',
      submitted: false,
      msg: 'Give me your feedback'
    }
  },
  methods: {
    submitForm(data) {
      const url = 
'https://docs.google.com/forms/d/e/1FAIpQLSdGmIOUKujemvm8nUJ-CVF5FGqxnl1BESmOoHr7fXJ7LUbnkg/formResponse';
      const params = {
        submit: 'Submit',
        usp: 'pp_url',
        'entry.834382080': this.name,
        'entry.1622159272': this.comment,
      };
      axios.get(url, { params })
       .then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
      });
      this.submitted = true;
      this.msg = 'Thank you for your feedback!';
    }
  }
} 

</script>

<style scoped>
h1 {
  color: orange;
  font-weight: bold;
  text-align: center;
}

div.form-item, button {
    text-align: center;
}

label {
    display: block;
    padding-top: 20px;
    margin: 10px 0;
}
</style>
