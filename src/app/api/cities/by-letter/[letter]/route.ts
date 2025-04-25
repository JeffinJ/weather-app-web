import { NextRequest, NextResponse } from 'next/server'

const API_BASE_URL = process.env.API_BASE_URL;
if (!API_BASE_URL) {
    throw new Error('API_BASE_URL is not defined in environment variables')
}

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ letter: string }> }
) {


    const { letter } = await params;
    console.log('letter:', letter);

    
    

    // Validate letter input
    if (!letter || letter.length !== 1 || !letter.match(/^[a-zA-Z]$/)) {
        return NextResponse.json(
            { error: 'Invalid input. Please provide a single letter.' },
            { status: 400 }
        )
    }

    try {
        // Call Spring Boot backend API
        const response = await fetch(`${API_BASE_URL}/cities/by-letter/${letter}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            next: { revalidate: 60 }, // Cache for 60 seconds
        })

        if (!response.ok) {
            throw new Error(`API returned ${response.status}`)
        }

        const data = await response.json()
        return NextResponse.json(data)
    } catch (error) {
        console.error('Error fetching cities:', error)
        return NextResponse.json(
            { error: 'Failed to fetch cities from backend service' },
            { status: 500 }
        )
    }
}