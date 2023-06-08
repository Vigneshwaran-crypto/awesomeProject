import axios, {Axios} from 'axios';

export const fetchPosts = async () => {
  try {
    const postData = await axios.get(
      'https://api.instantwebtools.net/v1/airlines',
    );
    console.log('Data after fetched :', postData);

    return postData.data;
  } catch (err) {
    console.log('error occurred while fetching Posts');
  }
};
