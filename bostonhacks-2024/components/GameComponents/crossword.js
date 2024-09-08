'use client'
import React, { useState } from 'react';
import {Crossword, ThemeProvider} from '@jaredreisinger/react-crossword';
import './crossword.css';

const data = {
    across: {
      4: {
        clue: 'The server-side part that makes your application work',
        answer: 'BACKEND',
        row: 5,
        col: 19,
      },
      6: {
        clue: 'One of the sponsors',
        answer: 'FLATLOGIC',
        row: 7,
        col: 8,
      },
      8: {
        clue: 'The hackathon venue building',
        answer: 'GSU',
        row: 7,
        col: 20,
      },
      10: {
        clue: 'A way to identify patterns of characters',
        answer: 'REGEX',
        row: 9,
        col: 7,
      },
      11: {
        clue: 'A CSS framework',
        answer: 'TAILWIND',
        row: 9,
        col: 14,
      },
      13: {
        clue: 'BostonHacks mascot name',
        answer: 'FELIZ',
        row: 10,
        col: 25,
      },
      14: {
        clue: 'Hackathon theme of the year',
        answer: 'SPACE',
        row: 11,
        col: 4,
      },
      17: {
        clue: 'A frontend javascript framework',
        answer: 'REACT',
        row: 13,
        col: 27,
      },
      18: {
        clue: 'Programming language often used for the web',
        answer: 'JAVASCRIPT',
        row: 15,
        col: 0,
      },
      19: {
        clue: 'One of the sponsors',
        answer: 'PATIENTSAFETY',
        row: 15,
        col: 16,
      },
      20: {
        clue: 'BHacks co-director',
        answer: 'CELINE',
        row: 17,
        col: 15,
      },
    },
    down: {
      1: {
        clue: 'A type of snake that is also a language',
        answer: 'PYTHON',
        row: 0,
        col: 24,
      },
      2: {
        clue: 'One of the sponsors',
        answer: 'SARGENTCOLLEGE',
        row: 4,
        col: 20,
      },
      3: {
        clue: 'A way for multiple computer programs to communicate',
        answer: 'API',
        row: 5,
        col: 15,
      },
      5: {
        clue: 'BHacks co-director',
        answer: 'JAMES',
        row: 6,
        col: 10,
      },
      7: {
        clue: 'A platform for developers to store and manage theeir code',
        answer: 'GITHUB',
        row: 7,
        col: 14,
      },
      9: {
        clue: 'Function that calls itself',
        answer: 'RECURSION',
        row: 9,
        col: 7,
      },
      12: {
        clue: 'A sequence of instructions used to perform a task or solve a problem',
        answer: 'ALGORITHM',
        row: 9,
        col: 27,
      },
      15: {
        clue: 'BU\'s most beloved furry friend',
        answer: 'RHETT',
        row: 11,
        col: 18,
      },
      16: {
        clue: 'A popular game engine',
        answer: 'UNITY',
        row: 12,
        col: 22,
      },
    },
  }

function sleep(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const CrosswordComponent = () => {
    const [correct, setCorrect] = useState(false);
    const [oneNumCorrect, setOneNumCorrect] = useState(false)
    const [numCorrect, setNumCorrect] = useState(-1)
    
    function onCrosswordCorrect(result) {
        console.log(result)
        setCorrect(result)
    }
    async function onCorrect(direction, number, answer) {
        console.log(direction, number, answer)
        setOneNumCorrect(true)
        setNumCorrect(number)
        await sleep(3000)
        setOneNumCorrect(false)
    }
    const theme = {
        columnBreakpoint : '768px',
        gridBackground: 'rgb(0,0,0)',
        cellBackground:	'rgb(255,255,255)',
        cellBorder:	'rgb(0,0,0)',
        textColor:	'rgb(0,0,0)',
        numberColor:	'rgba(0,0,0, 0.25)',
        focusBackground:	'rgb(255,255,0)',
        highlightBackground:	'rgb(255,255,204)'
      };
      

    return (
        <div>
            {correct ? <h1 className='flex justify-center'>Congrats! You Finished the Crossword!</h1> : <div/>}
            {oneNumCorrect ? <h2 className='flex justify-center'>{numCorrect} Correct!</h2> : (<div/>)}
            <ThemeProvider theme={theme}>
              <Crossword data={data} onCorrect={onCorrect} onCrosswordCorrect={onCrosswordCorrect} />
            </ThemeProvider>
            
        </div>
    )
}

export default CrosswordComponent