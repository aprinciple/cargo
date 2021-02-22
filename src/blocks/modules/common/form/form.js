/**
 * Handler of forms
 */

class PostForm {
	constructor(option) {
		this.forms = option.forms;
		this.url = option.url;
		this.method = option.method;
    this.notification = '';
    this.forms.forEach( (form) => {
      form.addEventListener('submit', (e) => {
        this.notification = form.querySelector('.form__notification');
        this.sendRequest(e);
      });
    } );
	}

	createRequest(form) {
		const data = new FormData(form);
		fetch(form.action, {
				method: this.method,
				body: data,
			})
			.then((resp) => {
				if (resp.status === 200) {
					this.showNoticeSuccess(this.notification);
					if (form.classList.contains('form--popup')) {
						form.style.display = 'none';
					}
				} else {
					this.showNoticeError(this.notification);
				}
			})
			.catch(error => console.error(error));
	}

	sendRequest(e) {
		e.preventDefault();
		this.createRequest(e.currentTarget);
	}

  createNotice({notice, status, text}) {
    notice.classList.add(status)
    notice.innerHTML = text;
  }

	showNoticeSuccess(notice) {
    this.createNotice({
      'notice': notice,
      'status': 'form__notification--success',
      'text': `Cообщение отправлено! <br>Мы свяжемся с вами в ближайшее время.`
    });
	}

	showNoticeError(notice) {
    this.createNotice({
      'notice': notice,
      'status': 'form__notification--error',
      'text': `Упс! Что-то пошло не так. <br>Попробуйте ещё.`
    });
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const forms = document.querySelectorAll('[data-form="post"]');

	if (forms) {
		(() => new PostForm({
			forms: forms,
			url: '',
			method: 'POST',
		}))();
	}
});