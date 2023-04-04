const jobs = [
    {
      title: 'Frontend Developer',
      company: 'Acme Co.',
      location: 'New York, NY',
      description: 'We are looking for a frontend developer to join our team.',
      apply_url: 'https://example.com/apply'
    },
    {
      title: 'Backend Developer',
      company: 'Acme Co.',
      location: 'San Francisco, CA',
      description: 'We are looking for a backend developer to join our team.',
      apply_url: 'https://example.com/apply'
    },
    {
      title: 'Full Stack Developer',
      company: 'Acme Co.',
      location: 'Chicago, IL',
      description: 'We are looking for a full stack developer to join our team.',
      apply_url: 'https://example.com/apply'
    }
  ];
  
  const filterButton = document.querySelector('#filter-button');
  const keywordsInput = document.querySelector('#keywords');
  const locationInput = document.querySelector('#location');
  const featuredJobsContainer = document.querySelector('.featured-jobs');
  
  // Generate the elements for all jobs
  jobs.forEach(generateJobElement);
  
  filterButton.addEventListener('click', event => {
      event.preventDefault();
  
      const keywords = keywordsInput.value.trim().toLowerCase();
      const location = locationInput.value.trim().toLowerCase();
  
      // Clear the featured jobs container
      featuredJobsContainer.innerHTML = '';
  
      // Filter the jobs by keywords and location
      const filteredJobs = jobs.filter(job => {
          return (
              job.title.toLowerCase().includes(keywords) &&
              job.location.toLowerCase().includes(location)
          );
      });
  
      // Generate and append the elements for the filtered jobs
      filteredJobs.forEach(generateJobElement);
  });
  
  function generateJobElement(job) {
      // Create the elements for the job
      const jobElement = document.createElement('div');
      const titleElement = document.createElement('h3');
      const companyElement = document.createElement('p');
      const locationElement = document.createElement('p');
      const descriptionElement = document.createElement('p');
      const applyButton = document.createElement('a');
  
      // Set the content and attributes of the elements
      titleElement.textContent = job.title;
      companyElement.textContent = job.company;
      locationElement.textContent = job.location;
      descriptionElement.textContent = job.description;
      applyButton.textContent = 'Apply Now';
      applyButton.href = job.apply_url;
  
      // Append the elements to the job element
      jobElement.appendChild(titleElement);
      jobElement.appendChild(companyElement);
      jobElement.appendChild(locationElement);
      jobElement.appendChild(descriptionElement);
      jobElement.appendChild(applyButton);
  
      // Append the job element to the featured jobs container
      featuredJobsContainer.appendChild(jobElement);
  }
  