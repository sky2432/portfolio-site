import axios from 'axios';
import { ref } from 'vue';

export default () => {
  const another = ref({});
  const fetchAnother = async () => {
    try {
      const res = await axios.get(
        process.env.VUE_APP_MICROCMS_API_URL + '/another',
        {
          headers: {
            'X-MICROCMS-API-KEY': process.env.VUE_APP_MICROCMS_API_KEY,
          },
        }
      );
      another.value = res.data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    another,
    fetchAnother,
  };
};
