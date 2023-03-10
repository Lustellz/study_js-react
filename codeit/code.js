const newMember = {
    name: 'Jerry',
    email: 'jerry@codeitmall.kr',
    department: 'engineering'
}

const editMember = {
    name: 'Alice',
    email: 'alice@codeitmall.kr',
    department: 'marketing'
}

fetch('https://learn.codeit.kr/api/members', {
    method: 'POST',
    body: JSON.stringify(newMember)
}) //option object

fetch('https://learn.codeit.kr/api/members/2', {
    method: 'PUT',
    body: JSON.stringify(editMember)
})

fetch('https://learn.codeit.kr/api/members/2', {
    method: 'DELETE'
})

.then((response) => response.text())
.then((result) => {
    console.log(result)
})