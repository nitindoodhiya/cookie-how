// App.js
import React, { useState} from 'react';
import VideoInputComponent from './VideoInputComponent';
import CookingInstructionsComponent from './CookingInstructionsComponent';
import './App.css';
import axios from 'axios'
import HeaderComponent from './HeaderComponent';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [recipe, setRecipe] = useState({
        "title": "Cream Cheese and Guava Paste Dessert",
        "description": "A small, easy dessert made with guava paste, inspired by Jacques Pepin's wife with a Spanish and Puerto Rican background. It consists of pound cake slices topped with guava paste, cream cheese, and fresh mint.",
        "instructions": [
            {
                "heading": "Prepare Pound Cake Slices",
                "body": {
                    "highlights": "Trim and cut pound cake slices",
                    "explanation": "Take a regular pound cake and slice it into small slices, about half an inch wide. Trim the slices if desired. Place the trimmed pound cake slices on a plate."
                }
            },
            {
                "heading": "Cut Guava Paste",
                "body": {
                    "highlights": "Cut guava paste into thick slices",
                    "explanation": "Take guava paste, which can be found in cans or blocks, and cut it into approximately half-inch thick slices. You can adjust the thickness according to your preference. Cut around 3 pieces."
                }
            },
            {
                "heading": "Add Cream Cheese",
                "body": {
                    "highlights": "Place cream cheese on top of the pound cake slices",
                    "explanation": "Take whipped cream cheese or any cream cheese of your choice and place a little bit on top of each pound cake slice. Spread it evenly."
                }
            },
            {
                "heading": "Garnish with Mint",
                "body": {
                    "highlights": "Add fresh mint leaves as a garnish",
                    "explanation": "Pick a few fresh mint leaves from the garden and place them on top of the cream cheese. These leaves complement the cream cheese and guava paste, enhancing the flavor."
                }
            },
            {
                "heading": "Presentation",
                "body": {
                    "highlights": "Arrange the dessert and add additional mint leaves",
                    "explanation": "Present the dessert by arranging the prepared pound cake slices with guava paste, cream cheese, and mint leaves. You can also place a few extra mint leaves around the dessert for added decoration."
                }
            },
            {
                "heading": "Serving Suggestions",
                "body": {
                    "highlights": "Serve the dessert on cookies or pancakes",
                    "explanation": "You can serve this delightful dessert on cookies or pancakes for a delicious combination. Enjoy this cream cheese and guava paste dessert created by Jacques Pepin's wife, Gloria."
                }
            }
        ]
    });

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:8000/process_url', {
            url: videoUrl
        });
        console.log(response.data.response);

        if (response.status !== 200) {
            throw new Error('Failed to process video URL');
        }

        setRecipe(response.data.response);
    };
    return (
      <div className="App">
      <HeaderComponent/>
      <form onSubmit={handleSubmit}>
        <label>
          Video Url:
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">submit</button>
      </form>
      {recipe !== null && <CookingInstructionsComponent
        title={recipe.title}
        description={recipe.description}
        instructions={recipe.instructions}
      />}
    </div>
    );


}

export default App;
