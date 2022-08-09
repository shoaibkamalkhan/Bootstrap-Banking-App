/* API Code */

fetch('https://27979f46-0c53-4efb-9ef0-608da66d0ff9.mock.pstmn.io/userSessions', { method: 'POST'})
    .then(results => results.json())
    .then(console.log)
