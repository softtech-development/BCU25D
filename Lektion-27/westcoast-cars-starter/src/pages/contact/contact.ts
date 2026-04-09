import HttpClient from '../../data/httpClient.js';
import { Post } from '../../models/post.js';

const form = document.querySelector<HTMLFormElement>('form')!;
// Stäng av normal validering...
form.noValidate = true;

const initApp = () => { };

const handleSubmit = async (e: SubmitEvent) => {
  e.preventDefault();

  const fields = Array.from(form.elements) as HTMLInputElement[];

  // Återställa fälten, ta bort eventuell invalid klass...
  fields.forEach(f => {
    f.classList.remove('invalid');
  });

  // Kontroller varje fält om de är ok, annars rapportera
  // att fältet är inkorrekt och sätta ett eget felmeddelande...
  form.firstName.validity.valueMissing ? form.firstName.setCustomValidity("Förnamn måste anges") : form.firstName.setCustomValidity('');
  form.lastName.validity.valueMissing ? form.lastName.setCustomValidity("Efternamn måste anges") : form.lastName.setCustomValidity('');
  form.email.validity.valueMissing ? form.email.setCustomValidity("E-post måste anges") : form.email.setCustomValidity('');
  form.message.validity.valueMissing ? form.message.setCustomValidity("Meddelande måste anges") : form.message.setCustomValidity('');
  form.reportValidity();

  if (!form.checkValidity()) {
    fields.forEach(f => {
      if (!f.checkValidity()) {
        f.classList.add('invalid');
      }
    });
  } else {
    fields.forEach(f => {
      f.classList.remove('invalid');
    });

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as Post;
    await new HttpClient<Post>("posts").add(data);
    form.reset();
  }
};

document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleSubmit);
