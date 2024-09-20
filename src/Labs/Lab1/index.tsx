export default function Lab1() {
    return (
      <div id="wd-lab1">
        <h2>Lab 1</h2>
        <h3>HTML Examples</h3>
        <div id="wd-h-tag">
          <h4>Heading Tags</h4>
Text documents are often broken up into several sections and 
subsections. Each section is usually prefaced with a short 
title or heading that attempts to summarize the topic of the 
section it precedes. For instance this paragraph is preceded by 
the heading Heading Tags. The font of the section headings are 
usually larger and bolder than their subsection headings. This 
document uses headings to introduce topics such as HTML 
Documents, HTML Tags, Heading Tags, etc. HTML heading tags can 
be used to format plain text so that it renders in a browser as 
large headings. There are 6 heading tags for different sizes: 
h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and 
h6 is the smallest heading.
        </div>
        <div id="wd-p-tag">
          <h4>Paragraph Tag</h4>
          <p id="wd-p-1">
This is a paragraph. We often separate a long set of sentences with 
vertical spaces to make the text easier to read. Browsers ignore vertical 
white spaces and render all the text as one single set of sentences. To 
force the browser to add vertical spacing, wrap the paragraphs you want to 
separate with the paragraph tag
          </p>
          <p id="wd-p-2">
This is the first paragraph. The paragraph tag is used to format
vertical gaps between long pieces of text like this one.
          </p>
          <p id="wd-p-3">
This is the second paragraph. Even though there is a deliberate white
gap between the paragraph above and this paragraph, by default
browsers render them as one contiguous piece of text as shown here on
the right.
          </p>
          <p id="wd-p-4">
This is the third paragraph. Wrap each paragraph with the paragraph
tag to tell browsers to render the gaps.
          </p>
        </div>
        <div id="wd-lists">
          <h4>List Tags</h4>
          <h5>Ordered List Tag</h5>
          How to make pancakes:
          <ol id="wd-pancakes">
            <li>Mix dry ingredients.</li>
            <li>Add wet ingredients.</li>
            <li>Stir to combine.</li>
            <li>Heat a skillet or griddle.</li>
            <li>Pour batter onto the skillet.</li>
            <li>Cook until bubbly on top.</li>
            <li>Flip and cook the other side.</li>
            <li>Serve and enjoy!</li>
          </ol>
          My favorite recipe:
          <ol id="wd-your-favorite-recipe">
            <li>In a bowl, crack the eggs and add milk if desired. Season 
                with a pinch of salt and pepper. Whisk the eggs thoroughly 
                until they are well mixed and slightly frothy.</li>
            <li>Heat a non-stick skillet over medium heat. Add butter or 
                olive oil and allow it to melt and coat the pan evenly. </li>
            <li>Pour the beaten eggs into the pan, tilting the pan gently 
                to spread the eggs evenly. Let the eggs cook undisturbed 
                for about 30 seconds or until the edges begin to set.</li>
            <li>Once the eggs have set slightly, gently lift the edges with 
                a spatula, allowing any uncooked eggs to flow underneath. Add 
                your desired fillings (cheese, vegetables, meat, etc.) onto 
                one half of the omelette.</li>
            <li>When the omelette is mostly cooked but still slightly soft 
                in the center, fold it in half with a spatula to cover the 
                fillings. Cook for another minute, allowing the cheese to 
                melt and the omelette to finish cooking.</li>
            <li>Slide the omelette onto a plate, and garnish with fresh 
                herbs if desired. Serve immediately with toast, avocado, 
                or your favorite breakfast sides.</li>
          </ol>
          <h5>Unordered List Tag</h5>
          My favorite books (in no particular order)
          <ul id="wd-my-books">
            <li>Dune</li>
            <li>Lord of the Rings</li>
            <li>Ender's Game</li>
            <li>Red Mars</li>
            <li>The Forever War</li>
          </ul>
          Your favorite books (in no particular order)
          <ul id="wd-your-books">
            <li>Steve Jobs</li>
            <li>Journey to the West</li>
            <li>Elon Musk</li>
            <li>Three Days to See</li>
          </ul>

        </div>

        <div id="wd-tables">
          <h4>Table Tag</h4>
          <table border={1} width="100%">
            <thead>
              <tr>
                <th>Quiz</th>
                <th>Topic</th>
                <th>Date</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Q1</td>
                <td>HTML</td>
                <td>2/3/21</td>
                <td>85</td>
              </tr>
              <tr>
                <td>Q2</td>
                <td>CSS</td>
                <td>2/10/21</td>
                <td>90</td>
              </tr>
              <tr>
                <td>Q3</td>
                <td>CSS</td>
                <td>2/17/21</td>
                <td>95</td>
              </tr>
              <tr>
                <td>Q4</td>
                <td>JavaScript</td>
                <td>2/24/21</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Q5</td>
                <td>A1-A3</td>
                <td>3/3/21</td>
                <td>95</td>
              </tr>
              <tr>
                <td>Q6</td>
                <td>Redux</td>
                <td>3/10/21</td>
                <td>90</td>
              </tr>
              <tr>
                <td>Q7</td>
                <td>Redux</td>
                <td>3/17/21</td>
                <td>95</td>
              </tr>
              <tr>
                <td>Q8</td>
                <td>Node</td>
                <td>3/24/21</td>
                <td>85</td>
              </tr>
              <tr>
                <td>Q9</td>
                <td>Node</td>
                <td>3/31/21</td>
                <td>95</td>
              </tr>
              <tr>
                <td>Q10</td>
                <td>Mong0</td>
                <td>4/7/21</td>
                <td>90</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>Average</td>
                <td>92</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div id="wd-images">
          <h4>Image tag</h4>
          Loading an image from the internet:
          <br />
          <img id="wd-starship"
            width="400px"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          />
          <br />
          Loading a local image:
          <br />
          <img id="wd-teslabot"  src="images/teslabot.jpg" height="200px" />
        </div>
        <div id="wd-forms">
          <h4>Form Elements</h4>
          <form id="wd-text-fields">
            <h5>Text Fields</h5>
            <label htmlFor="wd-text-fields-username">Username:</label>
            <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
            <label htmlFor="wd-text-fields-password">Password:</label>
            <input type="password" id="wd-text-fields-password" value="123@#$asd" />
            <br />
            <label htmlFor="wd-text-fields-first-name">First name:</label>
            <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
            <label htmlFor="wd-text-fields-last-name">Last name:</label>
            <input type="text" id="wd-text-fields-last-name" placeholder="Doe"
              value="Wonderland" title="The last name" />
            <h5>Text boxes</h5>
            <label>Biography:</label><br/>
            <textarea id="wd-textarea" cols={30} rows={10}>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.</textarea>
            <h5 id="wd-buttons">Buttons</h5>
            <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
            Hello World!
            </button>
            <h5>File upload</h5>
            <input id="wd-upload" type="file"/>
            <h5 id="wd-radio-buttons">Radio buttons</h5>

            <label>Favorite movie genre:</label><br />

            <input type="radio" name="radio-genre" id="wd-radio-comedy"/>
            <label htmlFor="wd-radio-comedy">Comedy</label><br />

            <input type="radio" name="radio-genre" id="wd-radio-drama"/>
            <label htmlFor="wd-radio-drama">Drama</label><br />

            <input type="radio" name="radio-genre" id="wd-radio-scifi"/>
            <label htmlFor="wd-radio-scifi">Science Fiction</label><br />

            <input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
            <label htmlFor="wd-radio-fantasy">Fantasy</label>
            <h5 id="wd-checkboxes">Checkboxes</h5>
            <label>Favorite movie genre:</label><br/>

            <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
            <label htmlFor="wd-chkbox-comedy">Comedy</label><br/>

            <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
            <label htmlFor="wd-chkbox-drama">Drama</label><br/>

            <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
            <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>

            <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
            <label htmlFor="wd-chkbox-fantasy">Fantasy</label>

            <h4 id="wd-dropdowns">Dropdowns</h4>

            <h5>Select one</h5>
            <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br/>
            <select id="wd-select-one-genre">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI">
                Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
            </select>

            <h5>Select many</h5>
            <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>
            <select id="wd-select-many-genre" multiple>
            <option selected value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI">
                Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
            </select>

            <h4>Other HTML field types</h4>

            <label htmlFor="wd-text-fields-email"> Email: </label>
            <input type="email"
                placeholder="jdoe@somewhere.com"
                id="wd-text-fields-email"/><br/>

            <label htmlFor="wd-text-fields-salary-start"> Starting salary:
            </label>
            <input type="number"
                id="wd-text-fields-salary-start"
                placeholder="1000"
                value="100000"/><br/>

            <label htmlFor="wd-text-fields-rating"> Rating: </label>
            <input type="range" id="wd-text-fields-rating"
                placeholder="Doe"
                max="5"
                value="4"/><br/>

            <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
            <input type="date"
                id="wd-text-fields-dob"
                value="2000-01-21"/><br/>
            
            <h4>Anchor tag</h4>
            Please
            <a id="wd-lipsum" href="https://www.lipsum.com"> click here </a>
            to get dummy text<br/>
            <a id="wd-github" href="https://github.com/sampsonqian/kanbas-react-web-app/tree/main"> click here </a>
            to the code repository on GitHub<br/>






          </form>
        </div>




      </div>
      
    );
  }
  
  