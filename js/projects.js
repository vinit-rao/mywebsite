// projects.js - All your projects in one easy-to-edit file
// TO ADD A NEW PROJECT: Just add a new object to this array!

const projects = [
    // ==================== VIDEO PROJECTS ====================
    {
        category: 'video',
        title: 'Lighting Assignment',
        description: 'Cinematic lighting study featuring three professional techniques: three-point, low-key, and high-key lighting.',
        link: 'https://www.youtube.com/watch?v=3i4h8ERBTiQ',
        image: 'images/project_11.gif',
        badges: ['Premiere Pro']
    },
    {
        category: 'video',
        title: 'Global Nurse Initiative',
        description: 'Professional event coverage with interviews, edited in Premiere Pro with After Effects compositions.',
        link: 'https://www.youtube.com/watch?v=RRANPGpEcV0',
        image: 'images/project_10.gif',
        badges: ['Premiere Pro', 'After Effects', 'Event']
    },
    {
        category: 'video',
        title: 'Nuit Blanche 2024',
        description: 'Recap of Ottawa\'s all-night art festival showcasing cultural vibrancy.',
        link: 'https://www.youtube.com/watch?v=Qp58TQwpZ94',
        image: 'images/project_4.gif',
        badges: ['Premiere Pro', 'Documentary']
    },
    {
        category: 'video',
        title: 'Nuit Blanche Slow-Mo',
        description: 'Artistic slow-motion edit emphasizing movement and emotion.',
        link: 'https://www.youtube.com/watch?v=7XCyAr0yxJk',
        image: 'images/project_5.gif',
        badges: ['Premiere Pro', 'Artistic']
    },
    {
        category: 'video',
        title: 'Forza 5 Gaming Edit',
        description: 'High-energy gaming montage with dynamic cuts and stylized transitions.',
        link: 'https://www.youtube.com/watch?v=u_CmJaKlpHg',
        image: 'images/project_12.gif',
        badges: ['CapCut', 'Gaming']
    },

    // ==================== PHOTOGRAPHY ====================
    {
        category: 'photos',
        title: 'Stills Video Project',
        description: 'Curated photography sequence exploring composition, pacing, and visual storytelling.',
        link: 'https://www.youtube.com/watch?v=DOs879L4MvE',
        image: 'images/project_8.gif',
        badges: ['Photography', 'Composition']
    },

    // ==================== GRAPHICS & ANIMATION ====================
    {
        category: 'graphics',
        title: 'Wendy\'s Commercial',
        description: '30-second animated commercial with dynamic keyframes and motion graphics.',
        link: 'https://www.youtube.com/watch?v=VhibQHSWPOE',
        image: 'images/project_7.gif',
        popupImage: 'images/project_7.1.gif',
        badges: ['After Effects', 'Animation']
    },
    {
        category: 'graphics',
        title: 'RAVO Brand Intro',
        description: 'Sleek 10-second motion graphics opener for videography brand.',
        link: 'https://www.youtube.com/watch?v=7FCf5Rhu4Zw',
        image: 'images/project_1.1.gif',
        popupImage: 'images/project_1.gif',
        badges: ['After Effects', 'Branding']
    },
    {
        category: 'graphics',
        title: 'Text Morph Animation',
        description: 'Experimental typography using graph editors for smooth morphing transitions.',
        link: 'https://www.youtube.com/watch?v=ML7khUEzdOY',
        image: 'images/project_2.gif',
        badges: ['After Effects', 'Typography']
    },
    {
        category: 'graphics',
        title: 'The Button',
        description: 'Sprite-based character animation with custom artwork and sound design.',
        link: 'https://www.youtube.com/watch?v=7xYjZKmTmC8',
        image: 'images/project_6.gif',
        badges: ['After Effects', 'Character']
    },
    {
        category: 'graphics',
        title: 'Walk Cycle',
        description: '3D character animation practice in Blender with rigging and walk cycle.',
        link: 'https://www.youtube.com/watch?v=_4oRm1HuIbo',
        image: 'images/project_3.gif',
        badges: ['Blender', '3D Animation']
    },

    // ==================== CODE PROJECTS ====================
    {
        category: 'code',
        title: 'Go Fish Game',
        description: 'Object-oriented Java card game with custom UI and strategic AI gameplay.',
        link: 'https://www.youtube.com/watch?v=6Rl1UXpWMZY',
        image: 'images/project_9.gif',
        badges: ['Java', 'NetBeans', 'OOP']
    },

    // ==================== ADD YOUR NEW PROJECTS BELOW ====================
    /*
    TEMPLATE - Copy this and fill in your info:
    {
        category: 'video',  // Options: 'video', 'photos', 'graphics', 'code'
        title: 'Your Project Title',
        description: 'Detailed description of your project.',
        link: 'https://youtube.com/watch?v=YOUR_VIDEO_ID',
        image: 'images/your-image.gif',
        popupImage: 'images/your-popup-image.gif',  // Optional - different image for popup
        badges: ['Tool 1', 'Tool 2', 'Skill']
    },
    */
];

// Don't edit below this line unless you know what you're doing!
// This makes the projects variable available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projects;
}