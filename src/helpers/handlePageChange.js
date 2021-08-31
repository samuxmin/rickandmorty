import Swal from 'sweetalert2';

export const handlePageChange = (action, thisPage, max = 100, history) => {
  if (action === 'next') {
    if (thisPage >= max) {
      return Swal.fire('This is the last page', 'You cant go forward', 'error');
    }
    history.push(`${thisPage + 1}`);
  } else if (action === 'prev') {
    if (thisPage <= 1) {
      return Swal.fire('This is the first page', 'You cant go back', 'error');
    }
    history.push(`${thisPage - 1}`);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
