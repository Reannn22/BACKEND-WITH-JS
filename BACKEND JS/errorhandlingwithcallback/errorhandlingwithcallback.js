setTimeout(() => {
    // Penentuan hasil dari proses asinkron
    const number = Math.random();
    if (number > 0.3) {
      isSuccess = true;
    }
   
    if (!isSuccess) {
      callback(new Error('Gagal membuatkan kopi.'), null);
      return;
    }
   
    console.log('Pramusaji selesai membuat kopi.');
    callback(null, name);
  }, estimationTime);