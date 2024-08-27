// feedback-widget.js

// Inject the HTML structure for the feedback widget
document.addEventListener('DOMContentLoaded', function() {
    var feedbackContainer = document.createElement('div');
    feedbackContainer.id = 'feedback-container';
    feedbackContainer.style.position = 'fixed';
    feedbackContainer.style.bottom = '20px';
    feedbackContainer.style.right = '20px';
    feedbackContainer.style.zIndex = '1000';

    feedbackContainer.innerHTML = `
        <button id="feedback-button" style="padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
          Feedback
        </button>
        <div id="feedback-form" style="display: none; position: absolute; bottom: 50px; right: 0; width: 300px; padding: 15px; background-color: white; border: 1px solid #ccc; border-radius: 5px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
          <textarea id="feedback-text" rows="4" style="width: 100%; padding: 10px; margin-bottom: 10px;" placeholder="Enter your feedback"></textarea>
          <button id="submit-feedback" style="padding: 10px 20px; background-color: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer;">
            Submit
          </button>
        </div>
    `;

    document.body.appendChild(feedbackContainer);

    // Show and hide the feedback form
    document.getElementById('feedback-button').addEventListener('click', function() {
        var form = document.getElementById('feedback-form');
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
    });

    // Handle feedback submission
    document.getElementById('submit-feedback').addEventListener('click', function() {
        var feedback = document.getElementById('feedback-text').value;
        if (feedback) {
            console.log('User feedback:', feedback);
            alert('Thank you for your feedback!');
            document.getElementById('feedback-text').value = '';
            document.getElementById('feedback-form').style.display = 'none';
        } else {
            alert('Please enter your feedback before submitting.');
        }
    });
});
