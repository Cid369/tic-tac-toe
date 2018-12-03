curl "https://aqueous-atoll-85096.herokuapp.com/games/:id" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    }
  }'

echo
