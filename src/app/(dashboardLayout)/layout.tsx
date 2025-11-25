import LogoutButton from '@/components/shared/LogoutButton'
import { getCookie } from '@/services/auth/tokenHandlers'
import React from 'react'

const commonDashboardLayout = async () => {
const accessToken = await getCookie("accessToken")
  return (
    <div>
        {accessToken &&  <LogoutButton/>}
        commonDashboardLayout
    </div>
  )
}

export default commonDashboardLayout