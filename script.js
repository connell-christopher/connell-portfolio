const glow = document.querySelector('.cursor-glow');

document.addEventListener('pointermove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});


const risks = [
    [
        'Broken Access Control',
        'Assess whether users can access resources or perform actions beyond their intended authorization boundary.'
    ],
    [
        'Security Misconfiguration',
        'Review application and deployment defaults, exposed functionality and security-sensitive configuration.'
    ],
    [
        'Software Supply Chain Failures',
        'Consider dependency, build and update paths that could introduce compromise into the application lifecycle.'
    ],
    [
        'Cryptographic Failures',
        'Assess whether sensitive data is adequately protected in transit, at rest and through appropriate cryptographic controls.'
    ],
    [
        'Injection',
        'Trace untrusted input into interpreters, databases and application logic to identify unsafe execution paths.'
    ],
    [
        'Insecure Design',
        'Identify missing security controls and unsafe assumptions in architecture and business logic.'
    ],
    [
        'Authentication Failures',
        'Review identity verification, sessions, credentials and token handling for weaknesses.'
    ],
    [
        'Software & Data Integrity Failures',
        'Examine whether software, updates and critical data can be trusted throughout their lifecycle.'
    ],
    [
        'Security Logging & Alerting Failures',
        'Assess whether security-relevant events are captured, monitored and actionable.'
    ],
    [
        'Mishandling of Exceptional Conditions',
        'Review error paths, unexpected states and failure handling for security-impacting behavior.'
    ]
];


document.querySelectorAll('.risk').forEach((btn, i) => {

    btn.addEventListener('click', () => {

        document
            .querySelectorAll('.risk')
            .forEach((x) => x.classList.remove('active'));

        btn.classList.add('active');

        document.querySelector('.detail-code').textContent =
            'A' + String(i + 1).padStart(2, '0') + ' / SECURITY REVIEW';

        document.querySelector('#riskTitle').textContent =
            risks[i][0];

        document.querySelector('#riskText').textContent =
            risks[i][1];

    });

});


const obs = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }

        });

    },
    {
        threshold: 0.12
    }
);


document
    .querySelectorAll('.reveal')
    .forEach((element) => obs.observe(element));
