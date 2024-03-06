document.addEventListener("DOMContentLoaded", function() {
	const pusher = new Pusher('04110b925bdfe2cdce22', {
	  cluster: 'ap2'
	});
  
	const channel = pusher.subscribe('my-channel');
	const chatDiv = document.getElementById('chat');
  
	channel.bind('my-event', function(data) {
	  const p = document.createElement('p');
	  p.textContent = data.message;
	  chatDiv.appendChild(p);
	});
  
	const messageForm = document.getElementById('message-form');
	const messageInput = document.getElementById('message-input');
  
	messageForm.addEventListener('submit', function(event) {
	  event.preventDefault();
	  const message = messageInput.value;
	  if (message.trim() !== '') {
		// Send the message to the Pusher channel
		channel.trigger('my-event', { message });
		messageInput.value = '';
	  }
	});
  });
  