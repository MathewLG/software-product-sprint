// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomQuote() {
  const quotes =
      [['"There are some people out there… And it doesn’t happen a lot. It’s rare. But they refuse to let you hate them. In fact, they care about you in spite of it. And the really special ones, they’re relentless at it. Doesn’t matter what you do to them. They take it and care about you anyway. They don’t abandon you, no matter how many reasons you give them. No matter how much you’re practically begging them to leave. And you wanna know why? Because they feel something for me that I can’t… They love me."'],
      ['“What if changing the world was just about being here, by showing up no matter how many times we get told we don’t belong, by staying true even when we’re shamed into being false, by believing in ourselves even when we’re told we’re too different? And if we all held on to that, if we refuse to budge and fall in line, if we stood our ground for long enough, just maybe… The world can’t help but change around us.”'],
      ['“Maybe wars aren’t meant to be won, maybe they’re meant to be continuous.”'],
      ['“We’re all living in each other’s paranoia.”'],
      ['“Hello, friend.”'],
      ['"I do see the beauty in the rules, the invisible code of chaos hiding behind the menacing face of order."'],
      ['"Control can sometimes be an illusion. But sometimes you need illusions to gain control. Fantasy is an easy way to give meaning to the world. To cloak our harsh reality with escapist comfort. After all, isnt that why we surround ourselves with so many screens? So we can avoid seeing? So we can avoid each other? So we can avoid truth?" '],
      ['“I wanted to save the world.”']];
  // Pick a random greeting.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('quote-container');
  greetingContainer.innerText = quote;
}
async function greeting(){
    const responseFromServer = await fetch('/hi');
    const greetingArray = await responseFromServer.json();
    const greetingContainer = document.getElementById('greeting-container');
    greetingContainer.innerText = greetingArray[Math.floor(Math.random()*greetingArray.length)];
}
