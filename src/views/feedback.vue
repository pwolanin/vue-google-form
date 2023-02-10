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
    <div class="form-item">
      <button type="submit" @click.prevent="submitFormGet">Submit Get</button>
      <button type="submit" @click.prevent="submitFormPost">Submit Post</button>
    </div>
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
  computed: {
    formParams() {
      return {
        submit: 'Submit',
        'entry.834382080': this.name,
        'entry.1622159272': this.comment,
      };
    },
    formUrl() {
      return 'https://docs.google.com/forms/d/e/1FAIpQLSdGmIOUKujemvm8nUJ-CVF5FGqxnl1BESmOoHr7fXJ7LUbnkg/formResponse';
    }
  },
  methods: {
    submitFormGet() {
      const params = this.formParams;
      // Tells Google Forms to pre-populate from the URL.
      params.usp = 'pp_url';
      axios.get(this.formUrl, { params })
       .catch(function (error) {
         console.log('expected error');
       });
      this.submitted = true;
      this.msg = 'Thank you for your feedback (GET)!';
    },
    submitFormPost() {
      const bodyFormData = new FormData();
      Object.entries(this.formParams).forEach(([key, value]) => {
        bodyFormData.append(key, value);
      });
      axios.post(this.formUrl, bodyFormData)
        .catch(function (error) {
          console.log(error);
        });
      this.submitted = true;
      this.msg = 'Thank you for your feedback (POST)!';
    },
  }
}

</script>

<style scoped>
h1 {
  color: orange;
  font-weight: bold;
  text-align: center;
}

div.form-item {
    text-align: center;
}

label {
    display: block;
    padding-top: 20px;
    margin: 10px 0;
}
</style>
