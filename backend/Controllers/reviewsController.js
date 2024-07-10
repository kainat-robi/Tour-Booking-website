import Tour from "../models/Tour.js"
import Review from "../models/Review.js"

export const createReviews = async(req , res)=>{

    const tourId = req.params.tourId
    const newReview = new Review({...req.body})

    try {
        const savedReview = await newReview.save()
        // update tour array
        await Tour.findByIdAndUpdate(tourId , {
            $push : {reviews : savedReview._id}
        })

        res.status(200).json({success : true , message : "review sunmitted" , data : savedReview})
        
    } catch (err) {
        res.status(500).json({success : false , message : 'failed to submit'})
    }
}
