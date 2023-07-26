const fs = require('fs');
const axios = require('axios');
const {promisify} = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

async function processData() {
  try {
    //Read data from file
    const fileData = await readFileAsync('data.txt', 'utf8');
    console.log('File content:', fileData);

    //Fetch data from an API
    const response = await axios.get('https://api.example.com/data');
    const apiData = response.data;
    console.log('API data:', apiData);

    //Manipulate data
    const modifiedData = apiData.map(item => {
      return {
        id: item.id,
        name: item.name.toUpperCase(),
        price: item.price * 2
      };
    });
    console.log('Modified data:', modifiedData);

    //Write data to a file
    await writeFileAsync('output.json', JSON.stringify(modifiedData, null, 2));
    console.log('Data written to file.');

    //Perform complex calculations
    const calculate = (x, y) => {
      return new Promise((resolve, reject) => {
        if (y === 0) {
          reject(new Error('Divide by zero error.'));
        } else {
          const result = x / y;
          resolve(result);
        }
      });
    };

    const result = await calculate(10, 5);
    console.log('Calculation result:', result);

    //Run external commands
    const {exec} = require('child_process');
    exec('ls -l', (error, stdout, stderr) => {
      if (error) {
        console.error('Error:', error);
      }
      console.log('Command output:', stdout);
    });
	//Catch errors if needed
  } catch (error) {
    console.error('Error:', error);
  }
}

processData();