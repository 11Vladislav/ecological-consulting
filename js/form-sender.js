document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      document.getElementById("responseMessage").innerText = "Сообщение отправлено!";
      form.reset();
    } else {
      document.getElementById("responseMessage").innerText = "Ошибка отправки. Попробуйте позже.";
    }
  } catch (error) {
    document.getElementById("responseMessage").innerText = "Ошибка сети. Проверьте подключение к интернету.";
  }
});