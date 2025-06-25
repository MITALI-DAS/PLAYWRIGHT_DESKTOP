//this file is only used when we do a video recording
//define config is default class which we call to use video recording

import{defineConfig} from '@playwright/test'
export default defineConfig ({
    reporter: [['html', { open: 'never' }]],
    use:{
    video:'retain-on-failure'
    }
})