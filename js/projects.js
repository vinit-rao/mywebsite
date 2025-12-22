// projects.js - All your projects in one easy-to-edit file
// TO ADD A NEW PROJECT: Just add a new object to this array!

const projects = [
    
    

    

    // ==================== GRAPHICS & ANIMATION ====================
    {
        category: 'graphics',
        title: 'AE Exercises #1',
        description: 'Practicing going through tutorials learning texturing and animating fake 3D shapes.',
        link: 'https://www.youtube.com/shorts/5S7Uq2qFkgY',
        image: 'images/project_14.gif',
        popupImage: 'images/project_14.gif',
        badges: ['| After Effects | Personal |']
    },
    {
        category: 'graphics',
        title: 'CU Hacking Animation',
        description: 'Short intro animation revealing new CU Hacking colors and branding.',
        link: 'https://www.youtube.com/watch?v=IrP4P2sCuQY',
        image: 'images/project_13.gif',
        popupImage: 'images/project_13.gif',
        badges: ['| After Effects | Club |']
    },
    {
        category: 'graphics',
        title: 'Wendy\'s Commercial',
        description: '15-second animated commercial with dynamic keyframes and motion graphics.',
        link: 'https://www.youtube.com/watch?v=VhibQHSWPOE',
        image: 'images/project_7.gif',
        popupImage: 'images/project_7.1.gif',
        badges: ['| After Effects | Personal |']
    },
    {
        category: 'graphics',
        title: 'Introducing RAVO',
        description: 'Sleek motion graphics opener for videography brand.',
        link: 'https://www.youtube.com/watch?v=4LNe7tF2YQ8',
        image: 'images/project_1.1.gif',
        popupImage: 'images/project_1.gif',
        badges: ['| After Effects | Personal |']
    },
    {
        category: 'graphics',
        title: 'Text Morph',
        description: 'Experimental typography using graph editors for smooth morphing transitions.',
        link: 'https://www.youtube.com/watch?v=ML7khUEzdOY',
        image: 'images/project_2.gif',
        badges: ['| After Effects | Personal |']
    },
    {
        category: 'graphics',
        title: 'The Button',
        description: 'Sprite-based character animation with custom artwork and sound design.',
        link: 'https://www.youtube.com/watch?v=7xYjZKmTmC8',
        image: 'images/project_6.gif',
        badges: ['| After Effects | School |']
    },
    {
        category: 'graphics',
        title: 'Walk Cycle',
        description: '3D character animation practice in Blender with rigging and walk cycle.',
        link: 'https://www.youtube.com/watch?v=_4oRm1HuIbo',
        image: 'images/project_3.gif',
        badges: ['| Blender | Personal']
    },
    // ==================== VIDEO PROJECTS ====================
    {
        category: 'video',
        title: 'Lighting Showcase',
        description: 'Cinematic lighting study featuring three professional techniques: three-point, high-contrast, and back lighting.',
        link: 'https://www.youtube.com/watch?v=3i4h8ERBTiQ',
        image: 'images/project_11.gif',
        badges: ['| Premiere Pro | School |']
    },
    {
        category: 'video',
        title: 'Global Nurse Initiative',
        description: 'Professional event coverage with interviews, edited in Premiere Pro with After Effects compositions.',
        link: 'https://www.youtube.com/watch?v=RRANPGpEcV0',
        image: 'images/project_10.gif',
        badges: ['| Premiere Pro | After Effects | Event |']
    },
    {
        category: 'video',
        title: 'Music Video',
        description: 'Artistic slow-motion edit emphasizing movement and emotion.',
        link: 'https://www.youtube.com/watch?v=mRWqT6rZetQ',
        image: 'images/project_5.gif',
        badges: ['| Premiere Pro | After Effects | Personal |']
    },
    // ==================== PHOTOGRAPHY ====================
    {
        category: 'photos',
        title: 'Late Night Hangout',
        description: 'Chill hangout with friends. Photos captured using Sony A7III 28-75mm F2.8',
        link: '',
        image: 'images/project_12.gif',
        badges: ['| Lightroom | Personal |']
    },
    {
        category: 'photos',
        title: 'Stills Video Project',
        description: 'Curated photography sequence exploring composition, pacing, and visual storytelling.',
        link: 'https://www.youtube.com/watch?v=DOs879L4MvE',
        image: 'images/project_8.gif',
        badges: ['| Premiere Pro | School |']
    },
    // ==================== CODE PROJECTS ====================
    {
        category: 'code',
        title: 'Go Fish Game',
        description: 'Object-oriented Java card game with custom UI and strategic AI gameplay.',
        link: 'https://www.youtube.com/watch?v=6Rl1UXpWMZY',
        image: 'images/project_9.gif',
        badges: ['| Java | NetBeans | School |']
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