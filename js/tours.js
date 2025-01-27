const filterSelect = document.querySelector('#filter-select');
const containerFilters = document.querySelectorAll(
	'.container-filter'
);

filterSelect.addEventListener('change', e => {
	const selectedValue = e.target.value;

	containerFilters.forEach(containerFilter =>
		containerFilter.classList.remove('active')
	);

	if (selectedValue === 'all') {
		containerFilters.forEach(containerFilter =>
			containerFilter.classList.add('active')
		);
	}

	const matchingFilter = document.querySelector(
		`.container-filter[data-filter="${selectedValue}"]`
	);

	if (matchingFilter) {
		matchingFilter.classList.add('active');
	}
});
