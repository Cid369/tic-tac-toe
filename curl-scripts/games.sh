
curl "https://tic-tac-toe-wdi.herokuapp.com/games[?over=]" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    }
  }'

echo
