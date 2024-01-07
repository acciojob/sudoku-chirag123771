//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  const board = document.querySelector('.sudoku-board');
  const candidateSwitch = document.getElementById('candidate-switch');
  const numberControls = document.querySelectorAll('.number-control');

  let selectedCell = null;

  board.addEventListener('click', function (event) {
    const clickedCell = event.target.closest('.standard');
    if (clickedCell) {
      if (selectedCell) {
        selectedCell.classList.remove('selected');
      }
      selectedCell = clickedCell;
      selectedCell.classList.add('selected');
    }
  });

  numberControls.forEach(function (button) {
    button.addEventListener('click', function () {
      if (selectedCell) {
        const value = button.dataset.value;
        if (candidateSwitch.checked) {
          toggleCandidate(selectedCell, value);
        } else {
          selectedCell.querySelector('.value').textContent = value;
        }
      }
    });
  });

  function toggleCandidate(cell, value) {
    const candidatesSpan = cell.querySelector('.candidates');
    const candidates = candidatesSpan.textContent.split('').map(Number);

    const index = candidates.indexOf(Number(value));
    if (index !== -1) {
      candidates.splice(index, 1);
    } else {
      candidates.push(Number(value));
    }

    candidates.sort((a, b) => a - b);
    candidatesSpan.textContent = candidates.join('');
  }
});

