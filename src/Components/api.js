import React from 'react'

export default function api() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f1c747c4edmsh34ddf7deed99f37p1901f0jsn2e246fdaf3be',
            'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
        }
    };
    
    fetch('https://amazon24.p.rapidapi.com/api/todaydeals', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  return (
    <>
    <p>hiii</p>
    </>
  )
}
