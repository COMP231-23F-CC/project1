



Login
RoomList




Booking 


Room Manage


curl -X 'POST' \
'http://192.168.2.10:8306/api/Booking' \
-H 'accept: text/plain' \
-H 'Content-Type: application/json-patch+json' \
-d '{
"id": 0,
"userId": 0,
"roomId": 0,
"startDate": "2023-12-04T02:10:25.925Z",
"endDate": "2023-12-04T02:10:25.925Z",
"guestName": "string",
"guestPhone": "string",
"totalPrice": 0,
"status": "string"
}'
