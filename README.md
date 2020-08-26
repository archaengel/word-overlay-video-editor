# Word Overlay Video Editor

![](public/assets/demo.gif)

## Table of Contents

- [Getting Started](#getting_started)
- [Prerequisites](#pre_reqs)
- [Use Cases](#func_reqs)

## Getting Started <a name = "getting_started"></a>

To get this project started on your local machine:

1. In the root folder of the project, run:

```bash
yarn install
```

3. Start the CORS-proxy server by running:

```bash
yarn server
```

4. In another terminal window, build the app and deploy it on your local machine by running

```bash
yarn deploy
```

### Prerequisites <a name = "prereqs"></a>

If you do not already have `serve` installed globally, you will need to install it before running the project. Do so by running:

```bash
  yarn global add serve
```

## Functional Requirements <a name = "func_reqs"></a>

- Pulls the data from the given text files and finds the 5 most common words across them:

  - To store the data from each call I used `react-query`.
  - On each succesful call, we store the text of the document in a redux store, `pages` responsible for storing our text data.
  - When the success status from each call is `true`, we dispatch an event to a redux reducer in charge of the state for the editor, which uses a heap and hashmap to find the 5 most frequent words across the three text files. There are likely already libraries available for this, and would likely opt to use prebuilt libraries in a production setting.
  - One unanticipated hurdle for this requirement was the requested documents did not have CORS access headers set on them. To solve this, I proxied the calls from the browser through a local server. In production, if given the ability to add Access-Control-Orgin headers to these resources, they should be added. If that's not the case, a more robust proxy service would need to be employed/built.

- Render 5 words over video player, each with:
  - a button to toggle its visibility
    - I hooked into reducer for the editor state to modify the ui state of each word.
  - drag and drop functionality within the video player
    - I used `react-dnd` and `redux` to keep track of each word's position, color, and visibility.
  - a menu displaying x-y coordinates after 2 seconds
    - I used `react-create-portal` to render an element outside of the DOM hierarchy, to break out of editor's boundaries.
    - I used local component state on each word to keep track of a timer to display the tooltip.
  - behavior which cycles through colors when clicked, but not dragged
    - I used the editor state mentioned above and dispatched actions to the editor's reducer on click.

* Known Issues
  - Word components can overlap significantly. Their transparent background can lead to a frustrating and unintuitive experience. I have a feeling SVG elements may solve this, but would need to look into this further. Given more time, it would make sense to give some ability to reorder the layering of the words, in the event that the user wants to achieve a specific effect.
