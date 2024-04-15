function showBranches() {
    document.getElementById('main-page').classList.add('hidden');
    document.getElementById('branches-page').classList.remove('hidden');
  }

  function showCycles(branch) {
    document.getElementById('branches-page').classList.add('hidden');
    document.getElementById('cycles-page').classList.remove('hidden');
    // You can further customize based on the selected branch if needed
  }

  function showSubjects(cycle) {
    document.getElementById('cycles-page').classList.add('hidden');
    document.getElementById('subjects-page').classList.remove('hidden');
    // Hide all subject sections first
    document.getElementById('physics-subjects').classList.add('hidden');
    document.getElementById('chemistry-subjects').classList.add('hidden');
    // Then show the relevant subject section based on the cycle
    if (cycle === 'Physics') {
      document.getElementById('physics-subjects').classList.remove('hidden');
    } else if (cycle === 'Chemistry') {
      document.getElementById('chemistry-subjects').classList.remove('hidden');
    }
    // You can further customize based on the selected cycle if needed
  }

  function redirectToDrive(subject) {
    // Replace the URL with the actual Google Drive link for the subject
    switch (subject) {
      case 'Physics':
        window.location.href = 'https://drive.google.com/drive/folders/17Z3rMEoui31MHtjl95mmP6oXMVrAW2tz';
        break;
      case 'Maths':
        window.location.href = 'https://drive.google.com/drive/folders/1DL06euTxLjK1GWH2AFPaB1Yfd5mxf_8j';
        break;
        case 'Maths1':
        window.location.href = 'https://drive.google.com/drive/folders/1sYdBua6wr7uhMYw4uIKw5hrPtYd10c_B';
        break;
      case 'CPP':
        window.location.href = 'https://drive.google.com/drive/folders/134H9d31TReG8O_qgglnE9qqgctLtEv-z';
        break;
      case 'ADLD':
        window.location.href = 'https://drive.google.com/drive/folders/16T2_I_JIEisswgPj4Xk6S_OY_DTtCklG';
        break;
      case 'BE':
        window.location.href = 'https://drive.google.com/drive/folders/17iJtHYPWgAjSgAG1-SPQKYIBfQsDTcYK';
        break;
      case 'English':
        window.location.href = 'https://drive.google.com/drive/folders/17lhdfYPpJruKzbPyIbqv2wL9TBdvwgDq';
        break;
      case 'Chemistry':
        window.location.href = 'https://drive.google.com/drive/folders/11s9sgR-Hpb40p2tVlsetlBWcE6UPIubO';
        break;
      case 'BEE':
        window.location.href = 'https://drive.google.com/drive/folders/19sv3ZFsqBuNxB3Ltuyu6YwYJLh_86q__';
        break;
      case 'IT Skill':
        window.location.href = 'https://drive.google.com/drive/folders/11qYDOnYNVIRyVNSYOFan64n-RHn8ozIa';
        break;
      case 'EV':
        window.location.href = 'https://drive.google.com/drive/folders/1EBRbMBS6r42GQ60k8O4AdkiC_0muZ1TF';
        break;
      case 'BioEvs':
        window.location.href = 'https://drive.google.com/drive/folders/13K6Hwh_bkWi1hBb9iYAJf6nQcS6In0AQ';
        break;
        case 'Civil':
        window.location.href = 'https://drive.google.com/drive/folders/1bfCQooRwbnmkJC_W18mTRYzTgfWHJhEb';
        break;
        case 'Python':
        window.location.href = 'https://drive.google.com/drive/folders/17c7FKu4TstfV-6Bfhc5uCij1rTK6TdIG';
        break;
        case 'Question papers':
        window.location.href = 'https://drive.google.com/drive/folders/1NT6kGiZI2-ycqLPZL-ELFsPKdyLakxie';
        break;
        case 'New physics':
        window.location.href = 'https://drive.google.com/drive/folders/1e-LQMg0B7XF9wJDfWg4vWwc8SZg16LXt';
        break;
      // Add cases for other subjects
      default:
        break;
    }
  }
  function goBack() {
    // Hide the current page and show the main page
    document.querySelectorAll('.page:not(.hidden)').forEach(function(page) {
      page.classList.add('hidden');
    });
    document.getElementById('main-page').classList.remove('hidden');
  }