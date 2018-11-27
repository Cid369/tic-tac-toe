
curl "https://tic-tac-toe-wdi.herokuapp.com/board" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "player1":"'"${X}"'",
      "player2":"'"${O}"'"
    }
  }'

echo
