
#step 1: get authentication token
C:\Users\sdass>curl -X POST  "http://localhost:4000/api/userlogin?user=frfrtg&password=2ty"

{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImZyZnJ0ZyIsImVtYWlsIjoiYnJhZEBnbWFpbC5jb20ifSwiaWF0IjoxNTI5ODExNzUyLCJleHAiOjE1Mjk4MTI5NTJ9.LjJhiOtnJAsWh_Qf-60Z"}
C:\Users\sdass>

#step 2: send authorization token on the header
C:\Users\sdass>curl -X POST -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImZyZnJ0ZyIsImVtYWlsIjoiYnJhZEBnbWFpbC5jb20ifSwiaWF0IjoxNTI5ODExNzUyLCJleHAiOjE1Mjk4MTI5NTJ9.LjJhiOtnJAsWh_Qf-60Z
wGp2KrvvuiQRboihPU3jDo4" "http://localhost:4000/api/posts/protected


{"one":1,"two":2,"three":3,"seven":7,"jwtAuth":"BRAVO!","authData":{"user":{"id"
:1,"username":"frfrtg","email":"brad@gmail.com"},"iat":1529811752,"exp":15298129
52}}
C:\Users\sdass>
